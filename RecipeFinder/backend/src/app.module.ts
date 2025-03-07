// import { Module } from '@nestjs/common';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { RecipeModule } from './RecipeAdd/Recipe.modules';

// @Module({
//   imports: [
//     TypeOrmModule.forRoot({
//       type: 'mysql', // Change to 'postgres' or your database type
//       host: 'localhost',
//       port: 3306, // Default MySQL port
//       username: 'root',
//       password: 'Anandhu@12', // Change this to your MySQL password
//       database: 'Recipe_Finder', // Change this to your database name
//       entities: [__dirname + '/**/*.entity{.ts,.js}'],
//       synchronize: true, // Set to false in production
//     }),
//     RecipeModule,
//   ],
// })
// export class AppModule {}
import { Module, MiddlewareConsumer, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecipeModule } from './RecipeAdd/Recipe.modules';
import * as cors from 'cors';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql', // Change to 'postgres' or your database type
      host: 'localhost',
      port: 3306, // Default MySQL port
      username: 'root',
      password: 'Anandhu@12', // Change this to your MySQL password
      database: 'Recipe_Finder', // Change this to your database name
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // Set to false in production
    }),
    RecipeModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(cors({ 
      origin: '*', // Allow all origins (for development only)
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      allowedHeaders: 'Content-Type, Authorization',
    })).forRoutes('*');
  }
}

