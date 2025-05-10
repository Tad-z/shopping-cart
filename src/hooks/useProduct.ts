import { useEffect, useState } from "react";
import type { Product } from "../types";

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://your-api.com/products") // or replace with mock
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  return { products, loading };
};
