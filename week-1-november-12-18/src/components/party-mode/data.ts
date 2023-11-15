import { faker } from '@faker-js/faker';

export type Member = {
    id: string;
    avatar: string;
}

export type Group = {
    avatar: string;
    latestActivity: number;
    members: Member[];
    name: string;
}

export type MediaItem = {
    id: string;
    bannerUrl: string;
    name: string;
    groups: Group[];
}

export const data: MediaItem = {
    id: faker.string.uuid(),
    bannerUrl: faker.image.urlPicsumPhotos(),
    name: faker.lorem.words(3),
    groups: [
        {
            avatar: faker.image.avatar(),
            latestActivity: faker.number.int({ min: 15, max: 60}),
            name: faker.lorem.words(4),
            members: [
                { 
                    id: faker.string.nanoid(),
                    avatar: faker.image.avatar(),
                },
                { 
                    id: faker.string.nanoid(),
                    avatar: faker.image.avatar(),
                },
                { 
                    id: faker.string.nanoid(),
                    avatar: faker.image.avatar(),
                },
                { 
                    id: faker.string.nanoid(),
                    avatar: faker.image.avatar(),
                },
                { 
                    id: faker.string.nanoid(),
                    avatar: faker.image.avatar(),
                },
            ]
        }
    ]
}
    