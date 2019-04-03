import {Brand} from '@app/shared/model/brand';
import {Category} from '@app/shared/model/category';
import {Gallery} from '@app/shared/model/gallery';

export class Item {
  id: number;
  name: string;
  price: number;
  importPrice: 10;
  capacity: string;
  description: string;
  brandId: number;
  categoryId: number;
  brand: Brand;
  category: Category;
  imageGalleries: Gallery[];
}
