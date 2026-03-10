export enum EnumTypeRegistry {
    CreateUserDto,
    UpdateUserDto,

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
    // Puedes seguir agregando DTOs aquí
};


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
};

type EnumTypeRegistryy = keyof typeof AliasRegistrsy; 
