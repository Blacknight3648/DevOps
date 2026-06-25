# Monorepo EP3 - InnovaTech

Este repositorio contiene el desarrollo completo de la Evaluación Parcial 3, integrando:
- ✅ **Backend**: Servicios de Ventas y Despachos (Spring Boot)
- ✅ **Frontend**: Aplicación de Gestión (React + Vite)

## 🚀 Despliegue con Docker Compose

### Requisitos Previos
- Docker Desktop instalado y corriendo.
- Variables de entorno configuradas en `.env` (ver `env.example`).

### Ejecución Rápida
```bash
# Construir y arrancar todos los servicios
docker-compose up --build -d
```

### Comandos Útiles

| Acción | Comando |
|--------|---------|
| **Arrancar todo** | `docker-compose up -d` |
| **Detener** | `docker-compose down` |
| **Reconstruir y arrancar** | `docker-compose up --build -d` |
| **Ver logs** | `docker-compose logs -f` |
| **Ver logs de un servicio** | `docker-compose logs -f ventas-service` |

### Acceso
- **Frontend**: [http://localhost:8050](http://localhost:8050)
- **API Ventas**: [http://localhost:8081](http://localhost:8081)
- **API Despachos**: [http://localhost:8082](http://localhost:8082)

### Estructura del Proyecto

```
/ep3-innovatech
├── /backend
│   ├── Springboot-API-REST-VENTAS
│   ├── Springboot-API-REST-DESPACHO
│   └── docker-compose.yml (CONFIGURACIÓN)
├── /frontend
│   ├── app (React + Vite)
│   └── docker-compose.yml (CONFIGURACIÓN)
├── env.example
└── README.md (tú lo estás leyendo)
```
