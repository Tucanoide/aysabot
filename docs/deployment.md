# Guía de Despliegue en Hostinger

Este proyecto está diseñado para correr en el **Selector de Node.js** de Hostinger. No es un sitio estático tradicional, por lo que no requiere (ni tiene) un archivo `index.html` en la raíz.

## Requisitos Previos

- Tener acceso al panel de control de Hostinger.
- El repositorio/archivos deben estar subidos a la carpeta del dominio (ej: `domains/tudominio.com/public_html`).

## Pasos para el Despliegue

1. **Configurar el Selector de Node.js**:
   - En el panel de Hostinger, busca "Node.js".
   - Selecciona la versión de Node (se recomienda v20+).
   - Establece el **Application Root** (donde está el `package.json`).
   - El **Application Startup File** suele ser una ruta autogenerada si usas el selector nativo, o puedes especificar un `server.js` personalizado si es necesario. Para Next.js, usualmente se gestiona vía scripts de `package.json`.

2. **Instalación de Dependencias**:
   - Una vez configurado el selector, haz clic en "Run npm install" o usa la terminal SSH si está habilitada.

3. **Compilación (Build)**:
   - Corre el comando: `npm run build`.
   - Esto generará la carpeta `.next`.

4. **Inicio de la Aplicación**:
   - Asegúrate de que el script `start` en `package.json` esté configurado correctamente (`next start`).
   - Inicia la aplicación desde el panel.

## Solución al Error 403

Si ves un error 403, verifica:
- Que el **Node.js Selector** esté encendido.
- Que no haya un archivo `.htaccess` bloqueando el acceso o que el servidor web esté intentando listar directorios en lugar de pasar la petición a Node.js.
- Si usas Apache como proxy, asegúrate de que redireccione al puerto donde corre Node.js (usualmente Hostinger lo gestiona automáticamente con su selector).

## Límites de Hostinger

- **Límite de Procesos**: ~200 procesos concurrentes.
- **Optimización**: Se prefiere el uso de **Server Components** para reducir la carga de Server Actions (que cuentan como procesos POST adicionales).
