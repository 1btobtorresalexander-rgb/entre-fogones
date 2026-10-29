# Entre Fogones: servidor seguro de OpenAI

## Qué incluye
- `api/ideas.js`: ruta servidor `POST /api/ideas`.
- `package.json`: dependencia oficial de OpenAI.
- `.gitignore`: evita subir archivos privados y dependencias.

## Instalación
1. Descomprime estos archivos en la misma carpeta donde está tu `index.html` actual.
2. Comprueba que la estructura sea:
   - `index.html`
   - `package.json`
   - `api/ideas.js`
   - `.gitignore`
3. Sube la carpeta del proyecto a un repositorio privado de GitHub.
4. En Vercel, importa ese repositorio y despliega.
5. En Vercel abre `Project > Settings > Environment Variables` y crea:
   - Name: `OPENAI_API_KEY`
   - Value: pega tu clave secreta de OpenAI
   - Environments: Production (y Preview si quieres probar previews)
6. Guarda la variable y vuelve a desplegar el proyecto.

## Seguridad
- No pongas la clave en `index.html`, en GitHub ni en este README.
- No compartas capturas donde se vea la clave.
- Si la clave se filtra, revócala en la plataforma de OpenAI y crea otra.

## Importante sobre el coste
La API se factura por separado de ChatGPT. Si tu saldo API es 0,00 $, la llamada puede fallar hasta que tengas crédito o facturación habilitada. No añadas una tarjeta si quieres mantenerlo en 0 €.

## Modelo
La ruta usa `gpt-5.5`. Si ese modelo no está disponible en tu proyecto API, cambia el valor de `model` en `api/ideas.js` por un modelo al que sí tengas acceso.
