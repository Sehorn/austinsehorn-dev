import { ExtendedRecordMap } from 'notion-types/src/maps';
import { getPageTitle } from 'notion-utils';

export const POSTS = {
  photos: {
    date: new Date('2022-04-20').toDateString(),
    uri: 'blog/photos-f03a07640e3e46eb8d97604ad8d3a600',
  },
};

export interface PageInfo {
  title: string;
  cover?: string;
  coverPosition?: number;
}

export interface Page extends PageInfo {
  uri: string;
  date: string;
}

export const getPageInfo = (page: ExtendedRecordMap): PageInfo => {
  const info: PageInfo = {
    title: getPageTitle(page),
  };

  const block = Object.values(page.block)[0].value;
  if (block.type === 'page' && block.format?.page_cover) {
    info.coverPosition = block.format.page_cover_position;
    info.cover =
      'https://www.notion.so/image/' +
      encodeURIComponent(block.format.page_cover) +
      '?table=block&id=' +
      block.id;
  }

  return info;
};
