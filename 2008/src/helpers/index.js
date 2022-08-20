
export function getQueryStr(name) {
  return new URLSearchParams(window.location.search).get(name)
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
    const key = categoryItem.id

    hashObj[key] = {
      id: categoryItem.id,
      name: categoryItem.name,
      slug: categoryItem.slug,
      lang: categoryItem.lang
    }
  })

  return hashObj
}

export function validateFormData({ value, name }) {
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