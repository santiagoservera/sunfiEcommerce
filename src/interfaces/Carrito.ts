export interface Carrito {
  id: number;
  usuarioId: number;
  estado: boolean;
  items: Item[];
}

export interface Item {
  id: number;
  usuarioId: number;
  categoriaId: number;
  codigo?: any;
  nombre: string;
  descripcion?: any;
  precio: number;
  cantidad: number;
  limiteVenta: number;
  imagen1?: any;
  imagen2?: any;
  imagen3?: any;
  imagen4?: any;
  createdAt: string;
  updatedAt?: any;
  CarritoArticulo: CarritoArticulo;
}

export interface CarritoArticulo {
  id: number;
  carritoId: number;
  articuloId: number;
  cantidad: number;
  precio: number;
}
