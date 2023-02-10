run: 
	docker run -d -p 80:3000 --rm --name prod dilec/product

stop: 
	docker stop prod
	
start: 
	docker start prod
	docker ps
