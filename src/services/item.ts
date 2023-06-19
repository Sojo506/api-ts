import { Item } from "../entities/item"
import { AppDataSource } from "../config/data-source"
import { CarInterface } from "../interfaces/car.interface"
import generateUUID from "../utils/generateUUID"

const itemRepository = AppDataSource.getRepository(Item)

const getCar = async (id: string) => {
  const responseItem = await itemRepository.findOneBy({
    id
  });

  return responseItem;
}

const getCars = async () => {
  const responseItems = await itemRepository.find()

  return responseItems;
}

const insertCar = async (item: CarInterface) => {
  const responseInsert = new Item()

  responseInsert.id = generateUUID();
  responseInsert.name = item.name;
  responseInsert.color = item.color;
  responseInsert.fuel = item.fuel;
  responseInsert.year = item.year;
  responseInsert.description = item.description;
  responseInsert.price = item.price;

  return await itemRepository.save(responseInsert);
}

const updateCar = async (id: string, item: CarInterface) => {
  const responseItem = await itemRepository.findOneBy({ id });

  if (!responseItem) {
    return false
  }

  Object.assign(responseItem, item);

  const updatedItem = await itemRepository.save(responseItem);
  return updatedItem;

}

const deleteCar = async (id: string) => {
  const responseItem = await itemRepository.findOneBy({
    id
  });

  if (!responseItem) {
    throw new Error('NOT_FOUND');
  }

  await itemRepository.remove(responseItem)
  return "ok"
}

export { getCar, getCars, insertCar, updateCar, deleteCar }