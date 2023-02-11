run: 
	docker run -d -p 80:3000 -v prod:/app/public --rm --name prod  dilec/product
run-dev: 
	docker run  -e WATCHPACK_POLLING=true -p 4000:3000 -d --rm --name product -v "C:\Users\User\Desktop\tests\product:/app" product:latest
stop:
	docker stop product
start: 
	docker start product
	docker ps
