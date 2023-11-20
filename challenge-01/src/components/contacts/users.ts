import { faker } from '@faker-js/faker';


export type User = {
  id: string;
  firstName: string;
  lastName: string;
  friendsCount: number;
  avatar: string;
}

export const USERS: User[] = faker.helpers.multiple(createRandomUser, {
  count: 4,
});

export function createRandomUser(): User {
  return {
    id: faker.string.uuid(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    avatar: faker.image.avatar(),
    friendsCount: faker.number.int({ min: 0, max: 9 })
  };
}



