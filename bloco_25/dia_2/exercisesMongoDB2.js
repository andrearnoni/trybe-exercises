// requisito 1
db.clientes.aggregate(
  [
    {
      $addFields: {
        idade: {
          $floor: {
            $divide: [
              { $subtract: ["$$NOW", "$dataNascimento"] },
              { $multiply: [86400000, 365] }
            ]
          }
        }
      }
    }
  ]
);

// requisito 2
db.clientes.aggregate(
  [
    {
      $addFields: {
        idade: {
          $floor: {
            $divide: [
              { $subtract: ["$$NOW", "$dataNascimento"] },
              { $multiply: [86400000, 365] }
            ]
          }
        }
      }
    },
    {
      $match: {
        idade: { $gte: 18, $lte: 25}
      }
    },
    {
      $count: "totalClientes"
    }
  ]
);

// requisito 3
db.clientes.aggregate(
  [
    {
      $addFields: {
        idade: {
          $floor: {
            $divide: [
              { $subtract: ["$$NOW", "$dataNascimento"] },
              { $multiply: [86400000, 365] }
            ]
          }
        }
      }
    },
    {
      $lookup: {
        from: "vendas",
        localField: "clienteId",
        foreignField: "clienteId",
        as: "compras",
      }
    }
  ]
);

// requisito 4
db.clientes.aggregate(
  [
    {
      $addFields: {
        idade: {
          $floor: {
            $divide: [
              { $subtract: ["$$NOW", "$dataNascimento"] },
              { $multiply: [86400000, 365] }
            ]
          }
        }
      }
    },
    {
      $lookup: {
        from: "vendas",
        localField: "clienteId",
        foreignField: "clienteId",
        as: "compras",
      }
    },
    {
      $match: {
        "compras.dataVenda": { $gte: ISODate('2019-06-01'), $lte: ISODate('2020-03-31') }
      }
    }
  ]
);

// requisito 5
db.clientes.aggregate(
  [
    {
      $addFields: {
        idade: {
          $floor: {
            $divide: [
              { $subtract: ["$$NOW", "$dataNascimento"] },
              { $multiply: [86400000, 365] }
            ]
          }
        }
      }
    },
    {
      $lookup: {
        from: "vendas",
        localField: "clienteId",
        foreignField: "clienteId",
        as: "compras",
      }
    },
    {
      $match: {
        "compras.dataVenda": { $gte: ISODate('2019-06-01'), $lte: ISODate('2020-03-31') }
      }
    }
  ]
).itcount();

// requisito 6
db.clientes.aggregate(
  [
    {
      $addFields: {
        idade: {
          $floor: {
            $divide: [
              { $subtract: ["$$NOW", "$dataNascimento"] },
              { $multiply: [86400000, 365] }
            ]
          }
        }
      }
    },
    {
      $lookup: {
        from: "vendas",
        localField: "clienteId",
        foreignField: "clienteId",
        as: "compras",
      }
    },
    {
      $match: {
        "compras.dataVenda": { $gte: ISODate('2019-06-01'), $lte: ISODate('2020-03-31') }
      }
    },
    {
      $group: { _id: "$endereco.uf", totalCompras: { $sum: 1 } }
    },
    {
      $sort: { totalCompras: -1 }
    },
    {
      $limit: 5
    }
  ]
);

// requisito 7
db.vendas.aggregate(
  [
    {
      $match: { "itens.nome": "QUEIJO PRATO" }
    },
    {
      $unwind: "$itens"
    },
    {
      $match: {
        "itens.nome": "QUEIJO PRATO"
      }
    },
    {
      $group: {
        _id: "$clienteId",
        totalConsumido: { $sum: "$itens.quantidade"}
      }
    },
    {
      $sort: { totalConsumido: -1 }
    },
    {
      $limit: 1
    },
    {
      $lookup: {
        from: "clientes",
        localField: "_id",
        foreignField: "clienteId",
        as: "cliente"
      }
    },
    {
      $project: {
        _id: 0,
        "nomeCliente": "$cliente.nome",
        "uf": "$cliente.endereco.uf",
        totalConsumido: 1
      }
    }
  ]
);

// requisito 8
db.vendas.aggregate(
  [
    {
      $match: {
        dataVenda: {
          $gte: ISODate('2020-03-01'),
          $lte: ISODate('2020-03-31')
        },
        status: "EM SEPARACAO"
      }
    },
    {
      $addFields: {
        dataEntregaPrevista: {
          $add: ["$dataVenda", 259200000]
        }
      }
    },
    {
      $project: {
        _id:0,
        clienteId: 1,
        dataVenda: 1,
        dataEntregaPrevista: 1
      }
    }
  ]
);