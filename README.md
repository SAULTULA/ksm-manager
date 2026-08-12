# KSM Servicios - Sistema de Gestión y CRM

Un panel de control web profesional y sistema CRM diseñado para la gestión del negocio de **KSM Servicios**. Este sistema permite administrar clientes, recursos y contratos, integrándose directamente con **Google Sheets** como base de datos en tiempo real. 

El proyecto cuenta con una interfaz premium y altamente personalizable, incluyendo modos con temas de sistemas operativos (Mac/Linux) y lógica automatizada para la fijación de precios y generación de contratos de clientes.

## 🚀 Características Principales

- **Dashboard Web Premium:** Interfaz de usuario moderna, fluida y responsiva (HTML, CSS y JS integrados en un solo archivo).
- **Temas de Interfaz (OS Modes):** Múltiples apariencias inspiradas en sistemas operativos como macOS y entornos Linux.
- **Base de Datos en Google Sheets:** Utiliza Google Apps Script para almacenar, leer y actualizar los datos directamente en una hoja de cálculo, sin necesidad de servidores complejos.
- **Gestión de Contratos Automatizada:** Lógica para la fijación automática de precios y generación de contratos para los clientes.
- **Despliegue Rápido (Frontend):** Listo para ser alojado en plataformas como Vercel, Netlify o GitHub Pages, dado que el frontend es 100% estático.

## 📂 Estructura del Proyecto

El repositorio consta de dos partes principales:

- `index.html`: **Frontend (Panel Web)**. Contiene toda la estructura, los estilos (CSS) y la lógica de interacción e interfaz (JavaScript). Se encarga de hacer las llamadas (`fetch`) al backend para guardar y obtener información.
- `Code.gs`: **Backend (API)**. Código de Google Apps Script. Sirve como puente o API entre el Panel Web y la base de datos (Google Sheets). 

## 🛠️ Instrucciones de Despliegue y Uso

### 1. Despliegue del Frontend (Vercel)

Ya que has subido este código a GitHub, conectarlo con Vercel es muy sencillo:
1. Inicia sesión en [Vercel](https://vercel.com/) con tu cuenta de GitHub.
2. Añade un **Nuevo Proyecto** (`Add New`) e importa el repositorio donde se encuentra el proyecto.
3. Haz clic en **Deploy**. Al ser un sitio estático (`index.html`), Vercel lo detectará y te entregará el enlace en segundos.

### 2. Despliegue del Backend (Apps Script / Base de Datos)

Para conectar tu sistema a los datos de la hoja de cálculo, debes habilitar el backend dentro de la cuenta de Google, usando el archivo `Code.gs`.

1. Accede a tu hoja de cálculo de Google Sheets.
2. Ve a **Extensiones > Apps Script**.
3. Se abrirá el editor de código de Google. En el archivo `Código.gs`, borra lo existente y **pega todo el contenido de nuestro archivo local `Code.gs`**.
4. Arriba a la derecha, haz clic en **Implementar > Nueva implementación**.
5. En tipo elige **Aplicación web**.
6. En *Ejecutar como*, elige **Yo**, y en *Quién tiene acceso* selecciona **Cualquier persona** (o *"Solo yo"* si deseas más seguridad).
7. Haz clic en **Implementar**. (Autoriza los permisos de Google de ser necesario).
8. Copia la **URL de la aplicación web**. 

> **Nota:** Esta URL de Apps Script es la que debes enlazar dentro del código de tu `index.html` (busca la variable correspondiente al Web App URL en el área de Scripts y reemplázala con tu nueva URL para que la web lea y escriba en el Excel).

## 📝 Documentación Adicional

- Todas las instrucciones detalladas de Google Sheets pueden encontrarse en el archivo `INSTRUCCIONES.md` del repositorio.
- Para consultas o ampliaciones del proyecto, dirígete a las tareas respectivas y revisiones de KSM Servicios.
