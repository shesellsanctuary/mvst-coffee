import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  BadRequestException,
} from '@nestjs/common';
import { CoffeeService } from './coffee.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
import {
  ApiTags,
  ApiOkResponse,
  ApiBody,
  ApiCreatedResponse,
  ApiParam,
} from '@nestjs/swagger';
import { Coffee } from './entities/coffee.entity';

@Controller('coffee')
@ApiTags('coffee')
export class CoffeeController {
  constructor(private readonly coffeeService: CoffeeService) {}

  @Post()
  @ApiCreatedResponse({ type: Coffee })
  @ApiBody({ type: CreateCoffeeDto })
  async create(@Body() createCoffeeDto: CreateCoffeeDto) {
    const { name } = createCoffeeDto;
    // Check if coffee with that name already exists
    const existingCoffee = await this.coffeeService.getCoffeeByName(name);
    if (existingCoffee) {
      throw new BadRequestException({
        message: `Coffee with name ${name} already exists`,
      });
    }
    // If not match, create new coffee
    return this.coffeeService.createCoffee(createCoffeeDto);
  }

  @Get()
  @ApiOkResponse({ type: [Coffee] })
  findAll() {
    return this.coffeeService.getCoffees();
  }

  @Get(':id')
  @ApiOkResponse({ type: [Coffee] })
  @ApiParam({ name: 'id', description: 'Coffee Id' })
  findOne(@Param('id') id: string) {
    return this.coffeeService.getCoffeeById(+id);
  }

  @Get(':name')
  @ApiParam({ name: 'name', description: 'Coffee name' })
  @ApiOkResponse({ type: [Coffee] })
  findOneByName(@Param('name') name: string) {
    return this.coffeeService.getCoffeeByName(name);
  }

  @Patch(':id')
  @ApiOkResponse({ type: [Coffee] })
  @ApiParam({ name: 'id', description: 'Coffee Id' })
  @ApiBody({ type: UpdateCoffeeDto })
  update(@Param('id') id: string, @Body() updateCoffeeDto: UpdateCoffeeDto) {
    return this.coffeeService.updateCoffee(+id, updateCoffeeDto);
  }

  @Delete(':id')
  @ApiParam({ name: 'id', description: 'Coffee Id' })
  remove(@Param('id') id: string) {
    return this.coffeeService.removeCoffee(+id);
  }
}
