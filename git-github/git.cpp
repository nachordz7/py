git init // Inicializa un nuevo repositorio Git en el directorio actual //Resultado: Se crea una carpeta .git en el directorio.

git add [archivo | directorio] // Añade archivos o cambios al área de preparación (staging area).
git add archivo.txt // Añadir un archivo específico.
git add . // Añadir todos los archivos.
  
git commit // Guarda los cambios del área de preparación en el historial del repositorio.


git config  // Configura opciones de Git, como el nombre de usuario y el correo electrónico.
git config <key> // Se utiliza para obtener el valor de una configuración específica
git config --global core.editor // Comando para cambiar el editor de texto.
git config --list // Para mostrar todas las propiedades que Git ha configurado.

git remote //Gestiona las conexiones a repositorios remotos.

git push // Envía los cambios locales al repositorio remoto.

git pull // Actualiza el repositorio local con los cambios del remoto.

git status // Para ver el estado actual del repositorio.
git status -s // Obtendrás una salida mucho más simplificada.
git status --short // Otra manera de escribrirlo.

git log // Para ver el historial de commits.
