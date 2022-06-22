mkcert -install
mkcert localhost.com "*.localhost.com" localhost.test localhost 127.0.0.1 ::1
mv localhost.com+5-key.pem ssl.key
mv localhost.com+5.pem ssl.cert