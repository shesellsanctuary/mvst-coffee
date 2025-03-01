import { Injectable } from '@nestjs/common';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
import { Coffee } from './entities/coffee.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CoffeeService {
  constructor(
    @InjectRepository(Coffee)
    private readonly coffeeRepository: Repository<Coffee>,
  ) {}

  createCoffee(createCoffeeDto: CreateCoffeeDto): Promise<Coffee> {
    const coffee: Coffee = new Coffee();
    coffee.name = createCoffeeDto.name;
    coffee.price = createCoffeeDto.price;
    coffee.description = createCoffeeDto.description;
    coffee.image = createCoffeeDto.image;
    coffee.type = createCoffeeDto.type;
    return this.coffeeRepository.save(coffee);
  }
  getCoffees(): Promise<Coffee[]> {
    return this.coffeeRepository.find();
  }

  getCoffeeById(id: number): Promise<Coffee> {
    return this.coffeeRepository.findOneBy({ id });
  }
  updateCoffee(id: number, updateCoffeeDto: UpdateCoffeeDto): Promise<Coffee> {
    const coffee: Coffee = new Coffee();
    coffee.name = updateCoffeeDto.name;
    coffee.price = updateCoffeeDto.price;
    coffee.description = updateCoffeeDto.description;
    coffee.image = updateCoffeeDto.image;
    coffee.type = updateCoffeeDto.type;
    coffee.id = id;
    return this.coffeeRepository.save(coffee);
  }

  removeCoffee(id: number): Promise<{ affected?: number }> {
    return this.coffeeRepository.delete(id);
  }
}
