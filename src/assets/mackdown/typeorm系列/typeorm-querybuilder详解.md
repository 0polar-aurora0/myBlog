## typeorm-querybuilder详解

- [官网链接](https://typeorm.biunav.com/zh/#%E4%BD%BF%E7%94%A8-querybuilder)
- github[仓库](https://github.com/typeorm/typeorm/tree/master/sample)

1. #### 为什么使用querybuilder？

   - QueryBuilder 的自由度更高
   
2. #### 什么是querybuilder

   > `QueryBuilder`是 TypeORM 最强大的功能之一 ，它允许你使用优雅便捷的语法构建 SQL 查询，执行并获得自动转换的实体。

3. #### querybuilder方法

   参数

   1. `alias` *(String)*: 别名

   ```
    /**
    * Creates a new query builder that can be used to build a SQL query.
    */
   createQueryBuilder(alias?: string, queryRunner?: QueryRunner): SelectQueryBuilder<Entity>;
   ```

   

4. #### 三种创建方式

- connection

    ```javascript
    import { getConnection } from "typeorm";

    const user = await getConnection()
      .createQueryBuilder()
      .select("user")
      .from(User, "user")
      .where("user.id = :id", { id: 1 })
      .getOne();

    ```

- entity manager

  ```javascript
  import { getManager } from "typeorm";
  
  const user = await getManager()
    .createQueryBuilder(User, "user")
    .where("user.id = :id", { id: 1 })
    .getOne();
  
  ```

- repository

    ```
    import { getRepository } from "typeorm";
    
    const user = await getRepository(User)
      .createQueryBuilder("user")
      .where("user.id = :id", { id: 1 })
      .getOne();
    
    ```
4. #### 五种querybuildedr类型

- `SelectQueryBuilder` - 用于构建和执行`SELECT`查询
- `InsertQueryBuilder` - 用于构建和执行`INSERT`查询
- `updateQueryBuilder` - 用于构建和执行`UPDATE`查询
- `DeleteQueryBuilder` - 用于构建和执行`DELETE`查询
- `RelationQueryBuilder` - 用于构建和执行特定于关系的操作[TBD]