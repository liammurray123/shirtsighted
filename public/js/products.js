console.log('WHYT');
// Supabase Setup
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://drritufkqjeftcmfduun.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)


console.log(supabaseKey);
// newProduct();
async function newProduct() {
  try {
    let newproduct = await supabase
      .from('products')
      .insert([
        {
          name: 'Diligent',
          price: 20.00,
          stock: 290,
          published: false
        }
      ])

    return newproduct;
  } catch (error) {
    console.log('Error: ', error)
  }
}