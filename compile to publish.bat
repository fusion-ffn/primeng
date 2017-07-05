call npm install
call gulp build


call tsc -p tsconfig-release.json
call xcopy "components" "..\publish\components\" /sy
call xcopy resources "..\publish\resources\" /E /Q


call copy package.json ..\publish

call copy ".npmignore" ..\publish 
call copy LICENSE.md ..\publish 
call copy primeng.js "..\publish" 

call copy primeng.ts "..\publish"
call rename "..\publish\primeng.ts" "primeng.d.ts"

ECHO DONE

set /p DUMMY=Hit ENTER to exit