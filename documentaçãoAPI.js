BASE URL: 107.170.27.23:3000


Status Codes:
500 - Deu algum erro
200 - Deu tudo certo
401 - Não autorizado (problema no token)

Em todos:
success: true (OK)
success: false (NOK)
================================================================================

//Novo usuário (por enquanto somente alguns dados, logo após fazemos outros)
URL: /signup
Method: POST
Params: {
    name: "admin",
    password: "admin",
    email: "admin@admin.com",
    cnpj: "111.111.1111/0001-11"
}
=================
==== RETURN =====
=================
Status: 200/500
Return: {
    "success": true or false,
    "msg": <String>
}
================================================================================
URL: /login
Method: POST
Params: {
    email: 'admin@admin.com',
    password: 'admin'
}
=================
==== RETURN =====
=================
Status: 200/500
Return: {
    "success": true or false,
    "token": <String> or null
    "msg": Se token for false, tem msg. Se for True, não tem.
}

================================================================================

URL: /company/qrCode
Method: GET
HEADER: x-access-token: token
=================
==== RETURN =====
=================
Status: 200/500
Return: {
    "success": true or false,
    "msg": <String>
    "url": <String> (somente se for true)
}
================================================================================

URL: /category/new
Method: POST
HEADER: x - access - token: token
Params: name
=================
==== RETURN =====
=================
Status: 200/500
Return: {
    "success": true or false,
    "msg": <String>
}

================================================================================

URL: /item/new
Method: POST
HEADER: x - access - token: token
Params: {
    categoryID: '573b9556fb9f2672157a8d03',
    name: 'Pastel de Flango',
    description: 'Qualquer coisa aqui',
    prices: [{
        "size": "pequeno",
        "price": 22.2
    }, {
        "size": "medio",
        "price": 22.2
    }, {
        "size": "grande",
        "price": 22.2
    }]
}
=================
==== RETURN =====
=================
Status: 200/500
Return: {
    "success": true or false,
    "msg": <String>
}

================================================================================
//REtorna somente as categorias ativas
//caso queira recuperar tudo use a rota /categories/findAllByCompany
URL: /category/findByCompany
Method: GET
Params: {
    companyID: '573b8cf7da7504af0ae33501'
}
=================
==== RETURN =====
=================
Status: 200/500
Return: {
    "success": true or false,
    "msg": <String>
    "company": {
        "_id": "573b8cf7da7504af0ae33501",
        "name": "admin",
        "email": "admin@admin.com",
        "social": null,
        "address": null,
        "phone": null
    },
    "categories": [{
        "_id": "573b94c81354f06e14402328",
        "name": "Entrada"
    }, {
        "_id": "573b9547fb9f2672157a8d00",
        "name": "Pratos Frios "
    }, {
        "_id": "573b954bfb9f2672157a8d01",
        "name": "Pratos Quentes "
    }, {
        "_id": "573b9551fb9f2672157a8d02",
        "name": "Sanduíche"
    }, {
        "_id": "573b9556fb9f2672157a8d03",
        "name": "Prato Principal"
    }, {
        "_id": "573b955afb9f2672157a8d04",
        "name": "Sobremesa"
    }, {
        "_id": "573b955efb9f2672157a8d05",
        "name": "Bebidas"
    }, {
        "_id": "573b9568fb9f2672157a8d06",
        "name": "Carta de Vinhos"
    }, {
        "_id": "573b956efb9f2672157a8d07",
        "name": "Cervejas artesanais"
    }, {
        "_id": "573b9574fb9f2672157a8d08",
        "name": "Opcionais"
    }]
}
================================================================================
//REtorna somente os items ativos
//Caso queira recuperar tudo use a rota /item/findAllByCategory
URL: /item/findByCategory
Method: GET
Params: {
    categoryID: '573b9556fb9f2672157a8d03'
}
=================
==== RETURN =====
=================
Status: 200/500
Return: {
    "success": true,
    "items": [{
        "_id": "573b977212afd29d16951c7a",
        "categoryID": "573b9556fb9f2672157a8d03",
        "name": "Pastel de Flango",
        "description": "Pastel de Flango mais gostosu do Blasil ",
        "__v": 0,
        "update_at": "2016-05-17T22:13:06.995Z",
        "create_at": "2016-05-17T22:13:06.995Z",
        "prices": [{
            "size": "pequeno",
            "price": 22.2,
            "_id": "573b977212afd29d16951c7d",
            "update_at": "2016-05-17T22:13:06.998Z",
            "create_at": "2016-05-17T22:13:06.998Z"
        }, {
            "size": "medio",
            "price": 22.2,
            "_id": "573b977212afd29d16951c7c",
            "update_at": "2016-05-17T22:13:06.997Z",
            "create_at": "2016-05-17T22:13:06.997Z"
        }, {
            "size": "grande",
            "price": 22.2,
            "_id": "573b977212afd29d16951c7b",
            "update_at": "2016-05-17T22:13:06.996Z",
            "create_at": "2016-05-17T22:13:06.996Z"
        }]
    }, {
        "_id": "573b98496b1d04551832efb1",
        "categoryID": "573b9556fb9f2672157a8d03",
        "name": "Pastel de Flango 1",
        "description": "Pastel de Flango mais gostosu do Blasil ",
        "__v": 0,
        "update_at": "2016-05-17T22:16:41.036Z",
        "create_at": "2016-05-17T22:16:41.036Z",
        "prices": [{
            "size": "pequeno",
            "price": 22.2,
            "_id": "573b98496b1d04551832efb4",
            "update_at": "2016-05-17T22:16:41.039Z",
            "create_at": "2016-05-17T22:16:41.039Z"
        }, {
            "size": "medio",
            "price": 22.2,
            "_id": "573b98496b1d04551832efb3",
            "update_at": "2016-05-17T22:16:41.038Z",
            "create_at": "2016-05-17T22:16:41.038Z"
        }, {
            "size": "grande",
            "price": 22.2,
            "_id": "573b98496b1d04551832efb2",
            "update_at": "2016-05-17T22:16:41.037Z",
            "create_at": "2016-05-17T22:16:41.037Z"
        }]
    }, {
        "_id": "573b984c6b1d04551832efb5",
        "categoryID": "573b9556fb9f2672157a8d03",
        "name": "Pastel de Flango 2",
        "description": "Pastel de Flango mais gostosu do Blasil ",
        "__v": 0,
        "update_at": "2016-05-17T22:16:44.325Z",
        "create_at": "2016-05-17T22:16:44.325Z",
        "prices": [{
            "size": "pequeno",
            "price": 22.2,
            "_id": "573b984c6b1d04551832efb8",
            "update_at": "2016-05-17T22:16:44.326Z",
            "create_at": "2016-05-17T22:16:44.326Z"
        }, {
            "size": "medio",
            "price": 22.2,
            "_id": "573b984c6b1d04551832efb7",
            "update_at": "2016-05-17T22:16:44.325Z",
            "create_at": "2016-05-17T22:16:44.325Z"
        }, {
            "size": "grande",
            "price": 22.2,
            "_id": "573b984c6b1d04551832efb6",
            "update_at": "2016-05-17T22:16:44.325Z",
            "create_at": "2016-05-17T22:16:44.325Z"
        }]
    }, {
        "_id": "573b984f6b1d04551832efb9",
        "categoryID": "573b9556fb9f2672157a8d03",
        "name": "Pastel de Flango 3",
        "description": "Pastel de Flango mais gostosu do Blasil ",
        "__v": 0,
        "update_at": "2016-05-17T22:16:47.230Z",
        "create_at": "2016-05-17T22:16:47.230Z",
        "prices": [{
            "size": "pequeno",
            "price": 22.2,
            "_id": "573b984f6b1d04551832efbc",
            "update_at": "2016-05-17T22:16:47.231Z",
            "create_at": "2016-05-17T22:16:47.231Z"
        }, {
            "size": "medio",
            "price": 22.2,
            "_id": "573b984f6b1d04551832efbb",
            "update_at": "2016-05-17T22:16:47.231Z",
            "create_at": "2016-05-17T22:16:47.231Z"
        }, {
            "size": "grande",
            "price": 22.2,
            "_id": "573b984f6b1d04551832efba",
            "update_at": "2016-05-17T22:16:47.231Z",
            "create_at": "2016-05-17T22:16:47.231Z"
        }]
    }, {
        "_id": "573b98506b1d04551832efbd",
        "categoryID": "573b9556fb9f2672157a8d03",
        "name": "Pastel de Flango 4",
        "description": "Pastel de Flango mais gostosu do Blasil ",
        "__v": 0,
        "update_at": "2016-05-17T22:16:48.855Z",
        "create_at": "2016-05-17T22:16:48.855Z",
        "prices": [{
            "size": "pequeno",
            "price": 22.2,
            "_id": "573b98506b1d04551832efc0",
            "update_at": "2016-05-17T22:16:48.855Z",
            "create_at": "2016-05-17T22:16:48.855Z"
        }, {
            "size": "medio",
            "price": 22.2,
            "_id": "573b98506b1d04551832efbf",
            "update_at": "2016-05-17T22:16:48.855Z",
            "create_at": "2016-05-17T22:16:48.855Z"
        }, {
            "size": "grande",
            "price": 22.2,
            "_id": "573b98506b1d04551832efbe",
            "update_at": "2016-05-17T22:16:48.855Z",
            "create_at": "2016-05-17T22:16:48.855Z"
        }]
    }, {
        "_id": "573b98526b1d04551832efc1",
        "categoryID": "573b9556fb9f2672157a8d03",
        "name": "Pastel de Flango 5",
        "description": "Pastel de Flango mais gostosu do Blasil ",
        "__v": 0,
        "update_at": "2016-05-17T22:16:50.986Z",
        "create_at": "2016-05-17T22:16:50.986Z",
        "prices": [{
            "size": "pequeno",
            "price": 22.2,
            "_id": "573b98526b1d04551832efc4",
            "update_at": "2016-05-17T22:16:50.987Z",
            "create_at": "2016-05-17T22:16:50.987Z"
        }, {
            "size": "medio",
            "price": 22.2,
            "_id": "573b98526b1d04551832efc3",
            "update_at": "2016-05-17T22:16:50.987Z",
            "create_at": "2016-05-17T22:16:50.987Z"
        }, {
            "size": "grande",
            "price": 22.2,
            "_id": "573b98526b1d04551832efc2",
            "update_at": "2016-05-17T22:16:50.986Z",
            "create_at": "2016-05-17T22:16:50.986Z"
        }]
    }, {
        "_id": "573b98576b1d04551832efc5",
        "categoryID": "573b9556fb9f2672157a8d03",
        "name": "Pastel de Flango 6",
        "description": "Pastel de Flango mais gostosu do Blasil ",
        "__v": 0,
        "update_at": "2016-05-17T22:16:55.782Z",
        "create_at": "2016-05-17T22:16:55.782Z",
        "prices": [{
            "size": "pequeno",
            "price": 22.2,
            "_id": "573b98576b1d04551832efc8",
            "update_at": "2016-05-17T22:16:55.783Z",
            "create_at": "2016-05-17T22:16:55.783Z"
        }, {
            "size": "medio",
            "price": 22.2,
            "_id": "573b98576b1d04551832efc7",
            "update_at": "2016-05-17T22:16:55.782Z",
            "create_at": "2016-05-17T22:16:55.782Z"
        }, {
            "size": "grande",
            "price": 22.2,
            "_id": "573b98576b1d04551832efc6",
            "update_at": "2016-05-17T22:16:55.782Z",
            "create_at": "2016-05-17T22:16:55.782Z"
        }]
    }, {
        "_id": "573b985a6b1d04551832efc9",
        "categoryID": "573b9556fb9f2672157a8d03",
        "name": "Pastel de Flango 7",
        "description": "Pastel de Flango mais gostosu do Blasil ",
        "__v": 0,
        "update_at": "2016-05-17T22:16:58.139Z",
        "create_at": "2016-05-17T22:16:58.139Z",
        "prices": [{
            "size": "pequeno",
            "price": 22.2,
            "_id": "573b985a6b1d04551832efcc",
            "update_at": "2016-05-17T22:16:58.141Z",
            "create_at": "2016-05-17T22:16:58.141Z"
        }, {
            "size": "medio",
            "price": 22.2,
            "_id": "573b985a6b1d04551832efcb",
            "update_at": "2016-05-17T22:16:58.140Z",
            "create_at": "2016-05-17T22:16:58.140Z"
        }, {
            "size": "grande",
            "price": 22.2,
            "_id": "573b985a6b1d04551832efca",
            "update_at": "2016-05-17T22:16:58.140Z",
            "create_at": "2016-05-17T22:16:58.140Z"
        }]
    }, {
        "_id": "573b985c6b1d04551832efcd",
        "categoryID": "573b9556fb9f2672157a8d03",
        "name": "Pastel de Flango 8",
        "description": "Pastel de Flango mais gostosu do Blasil ",
        "__v": 0,
        "update_at": "2016-05-17T22:17:00.761Z",
        "create_at": "2016-05-17T22:17:00.761Z",
        "prices": [{
            "size": "pequeno",
            "price": 22.2,
            "_id": "573b985c6b1d04551832efd0",
            "update_at": "2016-05-17T22:17:00.762Z",
            "create_at": "2016-05-17T22:17:00.762Z"
        }, {
            "size": "medio",
            "price": 22.2,
            "_id": "573b985c6b1d04551832efcf",
            "update_at": "2016-05-17T22:17:00.762Z",
            "create_at": "2016-05-17T22:17:00.762Z"
        }, {
            "size": "grande",
            "price": 22.2,
            "_id": "573b985c6b1d04551832efce",
            "update_at": "2016-05-17T22:17:00.762Z",
            "create_at": "2016-05-17T22:17:00.762Z"
        }]
    }, {
        "_id": "573b98606b1d04551832efd1",
        "categoryID": "573b9556fb9f2672157a8d03",
        "name": "Pastel de Flango 9",
        "description": "Pastel de Flango mais gostosu do Blasil ",
        "__v": 0,
        "update_at": "2016-05-17T22:17:04.546Z",
        "create_at": "2016-05-17T22:17:04.546Z",
        "prices": [{
            "size": "pequeno",
            "price": 22.2,
            "_id": "573b98606b1d04551832efd4",
            "update_at": "2016-05-17T22:17:04.546Z",
            "create_at": "2016-05-17T22:17:04.546Z"
        }, {
            "size": "medio",
            "price": 22.2,
            "_id": "573b98606b1d04551832efd3",
            "update_at": "2016-05-17T22:17:04.546Z",
            "create_at": "2016-05-17T22:17:04.546Z"
        }, {
            "size": "grande",
            "price": 22.2,
            "_id": "573b98606b1d04551832efd2",
            "update_at": "2016-05-17T22:17:04.546Z",
            "create_at": "2016-05-17T22:17:04.546Z"
        }]
    }, {
        "_id": "573b98636b1d04551832efd5",
        "categoryID": "573b9556fb9f2672157a8d03",
        "name": "Pastel de Flango 10",
        "description": "Pastel de Flango mais gostosu do Blasil ",
        "__v": 0,
        "update_at": "2016-05-17T22:17:07.757Z",
        "create_at": "2016-05-17T22:17:07.757Z",
        "prices": [{
            "size": "pequeno",
            "price": 22.2,
            "_id": "573b98636b1d04551832efd8",
            "update_at": "2016-05-17T22:17:07.757Z",
            "create_at": "2016-05-17T22:17:07.757Z"
        }, {
            "size": "medio",
            "price": 22.2,
            "_id": "573b98636b1d04551832efd7",
            "update_at": "2016-05-17T22:17:07.757Z",
            "create_at": "2016-05-17T22:17:07.757Z"
        }, {
            "size": "grande",
            "price": 22.2,
            "_id": "573b98636b1d04551832efd6",
            "update_at": "2016-05-17T22:17:07.757Z",
            "create_at": "2016-05-17T22:17:07.757Z"
        }]
    }, {
        "_id": "573b98696b1d04551832efd9",
        "categoryID": "573b9556fb9f2672157a8d03",
        "name": "Pastel de Flango 11",
        "description": "Pastel de Flango mais gostosu do Blasil ",
        "__v": 0,
        "update_at": "2016-05-17T22:17:13.237Z",
        "create_at": "2016-05-17T22:17:13.237Z",
        "prices": [{
            "size": "pequeno",
            "price": 22.2,
            "_id": "573b98696b1d04551832efdc",
            "update_at": "2016-05-17T22:17:13.237Z",
            "create_at": "2016-05-17T22:17:13.237Z"
        }, {
            "size": "medio",
            "price": 22.2,
            "_id": "573b98696b1d04551832efdb",
            "update_at": "2016-05-17T22:17:13.237Z",
            "create_at": "2016-05-17T22:17:13.237Z"
        }, {
            "size": "grande",
            "price": 22.2,
            "_id": "573b98696b1d04551832efda",
            "update_at": "2016-05-17T22:17:13.237Z",
            "create_at": "2016-05-17T22:17:13.237Z"
        }]
    }, {
        "_id": "573b986b6b1d04551832efdd",
        "categoryID": "573b9556fb9f2672157a8d03",
        "name": "Pastel de Flango 12",
        "description": "Pastel de Flango mais gostosu do Blasil ",
        "__v": 0,
        "update_at": "2016-05-17T22:17:15.474Z",
        "create_at": "2016-05-17T22:17:15.474Z",
        "prices": [{
            "size": "pequeno",
            "price": 22.2,
            "_id": "573b986b6b1d04551832efe0",
            "update_at": "2016-05-17T22:17:15.476Z",
            "create_at": "2016-05-17T22:17:15.476Z"
        }, {
            "size": "medio",
            "price": 22.2,
            "_id": "573b986b6b1d04551832efdf",
            "update_at": "2016-05-17T22:17:15.476Z",
            "create_at": "2016-05-17T22:17:15.476Z"
        }, {
            "size": "grande",
            "price": 22.2,
            "_id": "573b986b6b1d04551832efde",
            "update_at": "2016-05-17T22:17:15.474Z",
            "create_at": "2016-05-17T22:17:15.474Z"
        }]
    }, {
        "_id": "573b986d6b1d04551832efe1",
        "categoryID": "573b9556fb9f2672157a8d03",
        "name": "Pastel de Flango 13",
        "description": "Pastel de Flango mais gostosu do Blasil ",
        "__v": 0,
        "update_at": "2016-05-17T22:17:17.470Z",
        "create_at": "2016-05-17T22:17:17.470Z",
        "prices": [{
            "size": "pequeno",
            "price": 22.2,
            "_id": "573b986d6b1d04551832efe4",
            "update_at": "2016-05-17T22:17:17.471Z",
            "create_at": "2016-05-17T22:17:17.471Z"
        }, {
            "size": "medio",
            "price": 22.2,
            "_id": "573b986d6b1d04551832efe3",
            "update_at": "2016-05-17T22:17:17.471Z",
            "create_at": "2016-05-17T22:17:17.471Z"
        }, {
            "size": "grande",
            "price": 22.2,
            "_id": "573b986d6b1d04551832efe2",
            "update_at": "2016-05-17T22:17:17.470Z",
            "create_at": "2016-05-17T22:17:17.470Z"
        }]
    }, {
        "_id": "573b986f6b1d04551832efe5",
        "categoryID": "573b9556fb9f2672157a8d03",
        "name": "Pastel de Flango 14",
        "description": "Pastel de Flango mais gostosu do Blasil ",
        "__v": 0,
        "update_at": "2016-05-17T22:17:19.515Z",
        "create_at": "2016-05-17T22:17:19.515Z",
        "prices": [{
            "size": "pequeno",
            "price": 22.2,
            "_id": "573b986f6b1d04551832efe8",
            "update_at": "2016-05-17T22:17:19.516Z",
            "create_at": "2016-05-17T22:17:19.516Z"
        }, {
            "size": "medio",
            "price": 22.2,
            "_id": "573b986f6b1d04551832efe7",
            "update_at": "2016-05-17T22:17:19.515Z",
            "create_at": "2016-05-17T22:17:19.515Z"
        }, {
            "size": "grande",
            "price": 22.2,
            "_id": "573b986f6b1d04551832efe6",
            "update_at": "2016-05-17T22:17:19.515Z",
            "create_at": "2016-05-17T22:17:19.515Z"
        }]
    }, {
        "_id": "573b98746b1d04551832efe9",
        "categoryID": "573b9556fb9f2672157a8d03",
        "name": "Pastel de Flango 15",
        "description": "Pastel de Flango mais gostosu do Blasil ",
        "__v": 0,
        "update_at": "2016-05-17T22:17:24.582Z",
        "create_at": "2016-05-17T22:17:24.582Z",
        "prices": [{
            "size": "pequeno",
            "price": 22.2,
            "_id": "573b98746b1d04551832efec",
            "update_at": "2016-05-17T22:17:24.582Z",
            "create_at": "2016-05-17T22:17:24.582Z"
        }, {
            "size": "medio",
            "price": 22.2,
            "_id": "573b98746b1d04551832efeb",
            "update_at": "2016-05-17T22:17:24.582Z",
            "create_at": "2016-05-17T22:17:24.582Z"
        }, {
            "size": "grande",
            "price": 22.2,
            "_id": "573b98746b1d04551832efea",
            "update_at": "2016-05-17T22:17:24.582Z",
            "create_at": "2016-05-17T22:17:24.582Z"
        }]
    }]
}
================================================================================
URL: /item/changeStatus
Method: POST
HEADER: x - access - token: token
Params: {
    itemID: '573b98746b1d04551832efe9',
    status: true
}
=================
==== RETURN =====
=================
Status: 200/500
Return: {
    "success": true or false,
    "msg": <String>
}

================================================================================

URL: /item/remove
Method: POST
HEADER: x - access - token: token
Params: {
    itemID: '573b98746b1d04551832efe9'
}
=================
==== RETURN =====
=================
Status: 200/500
Return: {
    "success": true or false,
    "msg": <String>
}

================================================================================

URL: /category/changeStatus
Method: POST
HEADER: x - access - token: token
Params: {
    categoryID: '573b9574fb9f2672157a8d08',
    status: true
}
=================
==== RETURN =====
=================
Status: 200/500
Return: {
    "success": true or false,
    "msg": <String>
}

================================================================================
//Somente remove se tiver removido todos itens à categoria vinculados
URL: /category/remove
Method: POST
HEADER: x - access - token: token
Params: {
    categoryID: '573b9551fb9f2672157a8d02'
}
=================
==== RETURN =====
=================
Status: 200/500
Return: {
    "success": true or false,
    "msg": <String>
}

================================================================================
//Como foi alterado os dados da empresa, gera um novo token
URL: /company/edit
Method: POST
HEADER: x - access - token: token
Params: {
    name:,
    email: ,
    cpnj:  ,
    phone:,
    address: ,
    social: ,
}
=================
==== RETURN =====
=================
Status: 200/500
Return: {
    "success": true or false,
    "token": <string> or null
    "msg": <String>
}

================================================================================

//Como foi alterado os dados da empresa, gera um novo token
URL: /company/changePassword
Method: POST
HEADER: x - access - token: token
Params: {
    password: <String>
}
=================
==== RETURN =====
=================
Status: 200/500
Return: {
    "success": true or false,
    "token": <string> or null
    "msg": <String>
}

================================================================================

//Como foi alterado os dados da empresa, gera um novo token
URL: /category/edit
Method: POST
HEADER: x - access - token: token
Params: {
  categoryID: '573b9556fb9f2672157a8d03',
  name: 'Sobremesa',
}
=================
==== RETURN =====
=================
Status: 200/500
Return: {
    "success": true or false,
    "msg": <String>
}

================================================================================

//Como foi alterado os dados da empresa, gera um novo token
URL: /item/edit
Method: POST
HEADER: x - access - token: token
Params: {
  itemID: '573b9556fb9f2672157a8d03',
  name: 'Pastel de Flango',
  description: 'Qualquer coisa aqui',
  prices: [{
      "size": "pequeno",
      "price": 22.2
  }, {
      "size": "medio",
      "price": 22.2
  }, {
      "size": "grande",
      "price": 22.2
  }]
}
=================
==== RETURN =====
=================
Status: 200/500
Return: {
    "success": true or false,
    "msg": <String>
}

================================================================================
//Como ainda não to salvando a URL no Banco de dados, só exibo a url aqui
//Depois vou entregar a url junto com os dados da empresas
URL: /company/uploadLogo
Method: POST
HEADER: x-access-token: token
Params: {
  arquivo submetido como no exemplo do git (form multipart)
}
=================
==== RETURN =====
=================
Status: 200/500
Return: {
    "success": true or false,
    "url": url da imagem na amazon
    "msg": <String>
}

================================================================================
//Como ainda não to salvando a URL no Banco de dados, só exibo a url aqui
//Depois vou entregar a url junto com os dados da empresa
URL: /company/uploadBanner
Method: POST
HEADER: x-access-token: token
Params: {
  arquivo submetido como no exemplo do git (form multipart)
}
=================
==== RETURN =====
=================
Status: 200/500
Return: {
    "success": true or false,
    "url": url da imagem na amazon
    "msg": <String>
}

================================================================================
//Como ainda não to salvando a URL no Banco de dados, só exibo a url aqui
//Futuramtente vou gerar o arquivo de tags no cadastro do usuário, pq não muda
URL: /company/generateTags
Method: GET
HEADER: x-access-token: token

=================
==== RETURN =====
=================
Status: 200/500
Return: {
    "success": true or false,
    "url": url da imagem na amazon
    "msg": <String>
}
