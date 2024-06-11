import { CategoryType } from "@/types";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const getFeed = async ({category, PageNo}: {category: CategoryType , PageNo: number}) => {
  const res = await fetch(`${BASE_URL}/newsapp/unauth/getArticlesByCategoryPaginated?category=${category}&page=${PageNo}&size=20`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",

    },
  });
  const data = await res.json();
  if(res.status==200){
    return {success : true, feed: data};
  }

  return {feed: [], success: false};
};