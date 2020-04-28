PROJECT_NAME := gitlab-dashboard
DOCKER_COMPOSE := docker-compose -p ${PROJECT_NAME} -f ./docker-compose.yml

.PHONY: dev-serve
dev-serve:
	$(DOCKER_COMPOSE) up

.PHONY: build
build:
	${DOCKER_COMPOSE} build backend