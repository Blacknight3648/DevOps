import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import axios from "axios";

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  }
});

export const FormCrearDespachoManual = ({ onClose }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const jsonData = {
      fechaDespacho: data.fechaDespacho,
      patenteCamion: data.patenteCamion,
      idCompra: parseInt(data.idCompra, 10),
      direccionCompra: data.direccionCompra,
      valorCompra: parseInt(data.valorCompra, 10),
      intento: 0,
      despachado: false,
    };

    try {
      await axios.post("/api/v1/despachos", jsonData, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      Toast.fire({
        icon: "success",
        title: "Despacho Creado 🚚!"
      });
    } catch (error) {
      console.error("Error al crear el despacho:", error);
      Toast.fire({
        icon: "error",
        title: "Error al crear el despacho."
      });
    }
    onClose();
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-center text-center px-24 text-xl"
      >
        <div className="mx-auto text-3xl font-bold mb-10 text-teal-600">
          Nuevo Despacho (Manual)
        </div>
        <div className="mb-5">
          <label className="block font-bold mb-2">ID Orden de Compra</label>
          <input
            type="number"
            placeholder="Ingrese ID de compra"
            className="border border-gray-300 rounded-lg block w-full p-1"
            {...register("idCompra", { required: true })}
          />
        </div>
        <div className="mb-5">
          <label className="block font-bold mb-2">Fecha de Despacho</label>
          <input
            type="date"
            className="border border-gray-300 rounded-lg block w-full p-1"
            {...register("fechaDespacho", { required: true })}
          />
        </div>
        <div className="mb-5">
          <label className="block font-bold mb-2">Patente de Camión</label>
          <input
            type="text"
            placeholder="Ingrese patente"
            className="border border-gray-300 rounded-lg block w-full p-1"
            {...register("patenteCamion", { required: true })}
          />
        </div>
        <div className="mb-5">
          <label className="block font-bold mb-2">Dirección de Entrega</label>
          <input
            type="text"
            placeholder="Ingrese dirección"
            className="border border-gray-300 rounded-lg block w-full p-1"
            {...register("direccionCompra", { required: true })}
          />
        </div>
        <div className="mb-5">
          <label className="block font-bold mb-2">Valor de Compra</label>
          <input
            type="number"
            placeholder="Ingrese valor"
            className="border border-gray-300 rounded-lg block w-full p-1"
            {...register("valorCompra", { required: true })}
          />
        </div>

        <button
          className="py-6 px-14 rounded-lg bg-teal-600 text-white font-bold mb-14 hover:bg-teal-700 transition-colors"
          type="submit"
        >
          Crear Despacho
        </button>
      </form>
    </>
  );
};
