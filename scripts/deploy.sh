pm2 kill \ 
&& git pull --rebase
&& npm install \
&& npm run build \
&& pm2 start npm --name "tstall_frontend" -- start