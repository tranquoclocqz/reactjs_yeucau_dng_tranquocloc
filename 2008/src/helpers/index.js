import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import localeVi from 'dayjs/locale/vi';
import { DATE_TEMPLATE } from '../constants';
export function getQueryStr(name) {
  return new URLSearchParams(window.location.search).get(name)
}
export function formatDate(date){
  dayjs.extend(relativeTime);
  dayjs.locale(localeVi);
  return dayjs(date).format(DATE_TEMPLATE)  
}
export function mappingMenuData(menus) {
  const child = menus.child_items || [];
  return {
    id: menus.ID,
    title: menus.title,
    url: menus.url,
    childItems: child.map(mappingMenuData)
  }
}

export function mappingPostDataDetail(data){
  return {
    content: data.content.rendered,
    excerpt: data.excerpt.rendered,
    title: data.title.rendered,
    authorName: data.author_data.nickname,
    authorAvatar: data.author_data.avatar,
    datePublish: data.date,
    viewCount: data.view_count,
    commentCount: data.comment_count,
    thumbnail: data.featured_media_url
  }
}

export function mappingPostData(post) {
  return {
    id: post.id,
    title: post.title.rendered,
    author: post.author_data,
    authorId: post.author,
    thumbnail: post.featured_media_url,
    createdDate: post.date,
    slug: post.slug,
    categoriesId: post.categories,
    viewCount: post.view_count,
  }
}

export function handleHashCategoryById(categories) {
  const hashObj = {}

  categories.forEach(categoryItem => {
    const key = categories.id

    hashObj[key] = {
      id: categoryItem.id,
      name: categoryItem.name,
      slug: categoryItem.slug,
      lang: categoryItem.lang
    }
  })

  return hashObj
}

export function validateFormData({
  value,
  name
}) {
  let error = '';

  if (name === 'username' && !value) {
    error = 'Username không được rỗng!';
  }

  if (name === 'password') {
    if (!value) {
      error = 'Password không được rỗng!';
    } else if (value.length < 6) {
      error = 'Password phải có ít nhất 6 ký tự'
    }
  }

  return error;
}

export const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};