export enum EnumTypeRegistry {
  CreateUserDto,
  UpdateUserDto,
  LoginDto,
  CreateCategoryDto
}

export const AliasRegistry: Record<EnumTypeRegistry, Record<string, string>> = {

  [EnumTypeRegistry.CreateUserDto]: {
    name: 'Nombre',
    email: 'Correo electrónico',
    password: 'Contraseña',
    role: 'Rol de Usuario',
  },
  [EnumTypeRegistry.UpdateUserDto]: {
    email: 'Correo electrónico',
    role: 'Rol',
  },
  [EnumTypeRegistry.LoginDto]: {
    email: 'Correo electrónico',
    password: 'Contraseña',
  },
  [EnumTypeRegistry.CreateCategoryDto]: {
    name: 'Nombre',
    slug: 'Slug',
    parent_id: 'Categoría padre',
    icon: 'Icono',
    default_iva: 'IVA por defecto',
    age_restricted: 'Restringido por edad',
    requires_weight: 'Requiere peso',
    custom_fields: 'Campos personalizados',
    sort_order: 'Orden de clasificación'
  }
  // Puedes seguir agregando DTOs aquí
};
/*
const AliasRegistrsy = {
  CreateUserDto: {
    name: 'Nombre',
    email: 'Correo electrónico',
    password: 'Contraseña',
    role: 'Rol de Usuario',
  },
  UpdateUserDto: {
    email: 'Correo electrónico',
    role: 'Rol',
  },
  LoginDto: {
    email: 'Correo electrónico',
    password: 'Contraseña',
  }
};

type EnumTypeRegistryy = keyof typeof AliasRegistrsy;
*/