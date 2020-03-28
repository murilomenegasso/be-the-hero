
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function (table){
        //Primary Key
        table.increments();
        //
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();        
        //Relacionamento
        table.string('ong_id').notNullable();
        table.foreign('ong_id').references('id').inTable('ongs');
    })
  };
  
  exports.down = function(knex) {
      //Se der problema o que ser feito
      return  knex.schema.dropTable('incidents');
    
  };