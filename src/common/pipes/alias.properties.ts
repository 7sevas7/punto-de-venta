export enum EnumTypeRegistry {
  CreateUserDto,
  UpdateUserDto,
  LoginDto,
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