import { SetMetadata } from '@nestjs/common';

export const IS_PUBLIC_KEY = 'MoUfwev9siUasroN';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);