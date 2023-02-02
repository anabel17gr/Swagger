//SWAGGER
const path = require('path');
const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerSpec =

{
    definition: {
        openapi: "3.0.0",
        info: {
            title: "API de Ana Isabel García Ruiz",
            version: "1.0",
            description: "API para Bernat",
            contact: {
                name: "Ana Isabel",
                email: "anabe@gmail.com",
                url: "https://api.com"
            },
            license: {
                name: "GPLv3",
                url: "https://www.gnu.org/licenses/gpl-3.0.en.html"
            },
        },
        paths: {
            
            
//-------------------------------------------------------------------------------------------------------------------------------------------------

            "/api/alumnas": {
                get: {
                    summary: "Devuelve todas las alumnas del sistema al que tiene acceso el usuario",
                    tags: [
                        "alumnas"
                    ],
                    parameters: [
                        {
                            name: "name",
                            in: "path",
                            description: "Nombre de la alumna a buscar", 
                            required: true,
                            type: "integer",
                            format: "int64"
                        }
                    ],
                    responses: {
                        200: {
                            description: "Una alumna.",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object",
                                        properties: {
                                            name: {
                                                type: "string"

                                            }
                                        }, example: {
                                            "name": "Maria"
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                post: {
                    summary: "Crear una nueva alumna",
                    tags: [
                        "alumnas"
                    ],
                    responses: {
                        200: {
                            description: "Operación correcta",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "array",
                                        items: {
                                            type: "object",
                                            properties: {
                                                id: {
                                                    type: "integer",
                                                    format: "int64"
                                                },
                                                name: {
                                                    type: "string"
                                                }
                                            }, example: {

                                                "id": 1,
                                                "name": "Maria"
                                            }
                                        }
                                    }
                                }
                            }

                            }
                        }
                    },
                    put: {
                        summary: "Crear una nueva alumna",
                        tags: [
                            "alumnas"
                        ],
                        responses: {
                            200: {
                                description: "Operación correcta",
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "array",
                                            items: {
                                                type: "object",
                                                properties: {
                                                    id: {
                                                        type: "integer",
                                                        format: "int64"
                                                    },
                                                    name: {
                                                        type: "string"
                                                    }
                                                }, example: {
    
                                                    "id": 1,
                                                    "name": "Maria"
                                                }
                                            }
                                        }
                                    }
                                }
    
                                }
                            }
                        },
                delete: {
                    summary: "Borrar una alumna del sistema",
                    tags: [
                        "alumnas"
                    ],
                    parameters: [
                        {
                            name: "id",
                            in: "path",
                            description: "ID de la alumna a borrar",
                            required: true,
                            type: "integer",
                            format: "int64"
                        }
                    ],
                    responses: {
                        200: {
                            description: "Una alumna.",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object",
                                        properties: {
                                            message: {
                                                type: "string"
                                            }
                                        },
                                        example: {
                                            "message": "alumna borrada"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },   
        
            "/api/alumnas/{id}": {
                get: {
                    summary: "Devuelve todas las alumnas del sistema al que tiene acceso el usuario por su ID",
                    tags: [
                        "alumnas"
                    ],
                    parameters: [
                        {
                            name: "id",
                            in: "path",
                            description: "Id de la alumna a buscar",
                            required: true,
                            type: "integer",
                            format: "int64"
                        }
                    ],
                    responses: {
                        200: {
                            description: "Una lista de alumnas.",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "array",
                                        items: {
                                            type: "object",
                                            properties: {
                                                id: {
                                                    type: "integer",
                                                    format: "int64"
                                                },
                                                name: {
                                                    type: "string"
                                                }
                                            }, example: {

                                                "id": 1,
                                                "name": "Maria"
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            
            



        //-------------------------------------


        
            "/api/alumnos": {
                get: {
                    summary: "Devuelve todos los alumnos del sistema al que tiene acceso el usuario",
                    tags: [
                        "alumnos"
                    ],
                    parameters: [
                        {
                            name: "Nombre",
                            in: "path",
                            description: "Nombre del alumno a buscar",
                            required: true,
                            type: "integer",
                            format: "int64"
                        }
                    ],
                    responses: {
                        200: {
                            description: "Un alumno.",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object",
                                        properties: {
                                            name: {
                                                type: "string"

                                            }
                                        }, example: {
                                            "name": "Javier"
                                        }
                                    }
                                }

                            }
                        }
                    }
                },
                post: {
                    summary: "Crear un nuevo alumno",
                    tags: [
                        "alumnos"
                    ],
                    responses: {
                        200: {
                            description: "Operación correcta",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "array",
                                        items: {
                                            type: "object",
                                            properties: {
                                                id: {
                                                    type: "integer",
                                                    format: "int64"
                                                },
                                                name: {
                                                    type: "string"
                                                }
                                            }, example: {

                                                "id": 1,
                                                "name": "Javier"
                                            }
                                        }
                                    }
                                }

                            }
                        }
                    }
                },
                put: {
                    summary: "Crear un nuevo alumno",
                    tags: [
                        "alumnos"
                    ],
                    responses: {
                        200: {
                            description: "Operación correcta",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "array",
                                        items: {
                                            type: "object",
                                            properties: {
                                                id: {
                                                    type: "integer",
                                                    format: "int64"
                                                },
                                                name: {
                                                    type: "string"
                                                }
                                            }, example: {

                                                "id": 1,
                                                "name": "Javier"
                                            }
                                        }
                                    }
                                }

                            }
                        }
                    }
                },
                delete: {
                    summary: "Borrar un alumno del sistema",
                    tags: [
                        "alumnos"
                    ],
                    parameters: [
                        {
                            name: "id",
                            in: "path",
                            description: "ID del alumno a borrar",
                            required: true,
                            type: "integer",
                            format: "int64"
                        }
                    ],
                    responses: {
                        200: {
                            description: "Un alumno.",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object",
                                        properties: {
                                            message: {
                                                type: "string"
                                            }
                                        },
                                        example: {
                                            "message": "Alumno borrado"
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
            }, 
            "/api/alumnos/{id}": {
                get: {
                    summary: "Devuelve todos los alumnos del sistema al que tiene acceso el usuario por su ID",
                    tags: [
                        "alumnos"
                    ],
                    parameters: [
                        {
                            name: "Id",
                            in: "path",
                            description: "id del alumno a buscar",
                            required: true,
                            type: "integer",
                            format: "int64"
                        }
                    ],
                    responses: {
                        200: {
                            description: "Una lista de alumnos.",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "array",
                                        items: {
                                            type: "object",
                                            properties: {
                                                id: {
                                                    type: "integer",
                                                    format: "int64"
                                                },
                                                name: {
                                                    type: "string"
                                                }
                                            }, example: {

                                                "id": 1,
                                                "name": "Javier"
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    apis: [path.join(__dirname, 'routes/*.js')]
};
const swaggerDocs = (app, port) => {

    app.use('/api/docs', swaggerUI.serve, swaggerUI.setup(swaggerJsDoc(swaggerSpec)));
    console.log(`Swagger docs disponible en localhost:${port}/api/docs`);

}

module.exports = { swaggerDocs };
