import { createClient } from "@supabase/supabase-js";

const url ="https://yzarcwzecjauyctzwrbl.supabase.co";
const anonKey ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl6YXJjd3plY2phdXljdHp3cmJsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzMzMzQ3NDEsImV4cCI6MTk4ODkxMDc0MX0.TC4uMF4Pj7eS9h6fuSiTpn4VhxT29Y9OF59O_jAklmk";

export const database = createClient(url, anonKey);
