//requisito 1
db.clientes.aggregate([{ $match: { sexo: "MASCULINO" } }]);

//requisito 2
db.clientes
  .aggregate([{ $match: { sexo: "FEMININO",
    "dataNascimento": { $gte: ISODate('1995-01-01'), $lte: ISODate('2005-12-31') } } }]);

//requisito 3
db.clientes
  .aggregate([{ $match: { sexo: "FEMININO",
    "dataNascimento": { $gte: ISODate('1995-01-01'), $lte: ISODate('2005-12-31') } } }, { $limit: 5 }]);
    
//requisito 4
db.clientes
  .aggregate([{ $match: { "endereco.uf": "SC" } },
  { $group: { _id: "SC", total: { $sum: 1 } } }]);

//requisito 5
db.clientes.aggregate([{ $group: { _id: "$sexo", total: { $sum: 1 } } }]);

//requisito 6
db.clientes
  .aggregate([{ $group: { _id: {sexo: "$sexo", uf: "$endereco.uf"}, total: { $sum: 1 } } }]);

//requisito 7
db.clientes
  .aggregate([{ $group: { _id: {sexo: "$sexo", uf: "$endereco.uf"},
    total: { $sum: 1 } } },
    { $project: { _id: 0, "estado": "$_id.uf", "sexo": "$_id.sexo", "total": 1 } }]);
    
//requisito 8
db.vendas
  .aggregate([{ $match: { status: { $in: ["ENTREGUE", "EM SEPARACAO"] } }},
    { $group: { _id: "$clienteId", valorTotal: { $sum: "$valorTotal"} } },
    { $sort: { valorTotal: -1 } },
    { $limit: 5 }]);  
    
//requisito 9
db.vendas
  .aggregate([{ $match: { dataVenda: { $gte: ISODate('2019-01-01'), $lte: ISODate('2019-12-31') } }},
    { $group: { _id: "$clienteId", valorTotal: { $sum: "$valorTotal"} } },
    { $sort: { valorTotal: -1 } }, { $limit: 10 }]); 
    
//requisito 10
db.vendas
  .aggregate([{ $group: { _id: "$clienteId", totalCompras: { $sum: 1 } }},
  { $match: { totalCompras: { $gt: 5 } } }, { $count: 'clientes' }]);
  
//requisito 11
db.vendas
  .aggregate([{ $match: { dataVenda: { $gte: ISODate('2020-01-01'), $lte: ISODate('2020-03-31')} } },
    { $group: { _id: "$clienteId", totalCompras: { $sum: 1 } }},
    { $match: { totalCompras: { $lt: 3 } } },
    { $count: 'clientes' }]);

//requisito 12
db.vendas
  .aggregate([{ $match: { dataVenda: { $gte: ISODate('2020-01-01'), $lte: ISODate('2020-12-31') } } },
    { $lookup: { from: "clientes", localField: "clienteId", foreignField: "clienteId", as: "dadosCliente" } },
    { $unwind: "$dadosCliente" }, { $group: { _id: "$dadosCliente.endereco.uf", totalVendas: { $sum: 1 } } },
    { $sort: { totalVendas: -1 } }, { $limit: 3 }, { $project: { _id: 0, totalVendas: 1, uf: "$_id" } }]);
    
//requisito 13
db.vendas
  .aggregate([{ $match: { dataVenda: { $gte: ISODate('2019-01-01'), $lte: ISODate('2019-12-31') } } },
    { $lookup: { from: "clientes", localField: "clienteId", foreignField: "clienteId", as: "dadosCliente" } },
    { $unwind: "$dadosCliente" },
    { $group: { _id: "$dadosCliente.endereco.uf", mediaVendas: { $avg: "$valorTotal" }, totalVendas: { $sum: 1 } } },
    { $project: { _id: 0, uf: "$_id", mediaVendas: 1, totalVendas: 1 } }, { $sort: { uf: 1 } }]);    