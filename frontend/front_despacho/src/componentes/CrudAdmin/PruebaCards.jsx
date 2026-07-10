import { useState } from "react";
import { CardComponent } from "./CardComponent";
import { TableCompras } from "./TableCompras";
import { TableDespachos } from "./TableDespachos";
import { FormCrearVenta } from "./FormCrearVenta";
import { FormCrearDespachoManual } from "./FormCrearDespachoManual";
import { Modal } from "./Modal";

export const PruebaCards = () => {
  const [tablaCompras, setTablaCompras] = useState(false);
  const [tablaOrdenes, setTablaOrdenes] = useState(false);
  
  const [openModalVenta, setOpenModalVenta] = useState(false);
  const [openModalDespacho, setOpenModalDespacho] = useState(false);

  return (
    <section>
      <div className="flex justify-center flex-wrap gap-4 mb-4">
        <CardComponent
          title="Crear Orden de compra 🛒➕"
          description="Genera una nueva orden de compra en el sistema"
          buttonText="Crear"
          onClick={() => setOpenModalVenta(true)}
        />
        <CardComponent
          title="Crear Despacho ➕"
          description="Registra manualmente un nuevo despacho en el sistema"
          buttonText="Crear"
          onClick={() => setOpenModalDespacho(true)}
        />
      </div>
      <div className="flex justify-center flex-wrap gap-4">
        <CardComponent
          title="Consultar Ordenes de compra 💰"
          description="Revisa las últimas oc realizadas para generar su despacho"
          buttonText="Consultar"
          onClick={() => {
            setTablaCompras(true);
            setTablaOrdenes(false);
          }}
        />
        <CardComponent
          title="Revisar Ordenes de despacho 🚚"
          description="Consulta los despachos realizados, modifica los registros de intentos o cierra la orden"
          buttonText="Consultar"
          onClick={() => {
            setTablaCompras(false);
            setTablaOrdenes(true);
          }}
        />
      </div>

      <section className="mt-8">
        {tablaCompras && <TableCompras />}
        {tablaOrdenes && <TableDespachos />}
      </section>

      <Modal open={openModalVenta} onClose={() => setOpenModalVenta(false)}>
        <FormCrearVenta onClose={() => setOpenModalVenta(false)} />
      </Modal>

      <Modal open={openModalDespacho} onClose={() => setOpenModalDespacho(false)}>
        <FormCrearDespachoManual onClose={() => setOpenModalDespacho(false)} />
      </Modal>
    </section>
  );
};
