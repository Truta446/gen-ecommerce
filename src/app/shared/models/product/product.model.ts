import { SizeModel } from "./size/size.model";
import { ColorModel } from "./color/color.model";
import { ImageModel } from "./image/image.model";
import { ProductType } from "../../types/produt.type";

export class ProductModel {
  public id: string = '';
  public name: string = '';
  public description?: string = '';
  public images: Array<ImageModel> = [];
  public price: number = 0;
  public rating: number = 0;
  public type: ProductType = 'SHOE';
  public colors?: Array<ColorModel> = [];
  public sizes?: Array<SizeModel> = [];
  public insertedAt: string = '';
  public updatedAt: string = '';
};
