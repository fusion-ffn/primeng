call npm install

ECHO build css
call gulp build

ECHO compile typescript
call tsc -p tsconfig-release.json -d true
ECHO compilation done

ECHO copy files to publish folder
ECHO resources
call xcopy "components" "..\publish\components\" /sy
call xcopy "src\app\components\*.ts" "..\publish\components\" /sy
call xcopy resources "..\publish\resources\" /E /Q

ECHO json
call copy package.json ..\publish
ECHO ignore
call copy ".npmignore" ..\publish 
ECHO licenses
call copy README.md ..\publish
call copy LICENSE.md ..\publish 
ECHO primeng
call copy primeng.js "..\publish" 
call copy primeng.ts "..\publish" 
call copy primeng.js.map "..\publish"
ECHO DONE
set /p DUMMY=Hit ENTER to exit