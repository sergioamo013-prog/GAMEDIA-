# GAMEDIA · Fase 1

Next.js 14 + TypeScript + Tailwind + Supabase. **No se ha podido ejecutar ni probar aún** (se generó sin acceso a internet): el primer `npm install` y `npm run dev` son la prueba real.

## Instalación
1. `npm install`
2. Crea un proyecto en https://supabase.com. En **SQL Editor** ejecuta `database/schema.sql` y luego `database/seed_demo.sql`.
3. Copia `.env.example` a `.env.local` y rellena `NEXT_PUBLIC_SUPABASE_URL` y `NEXT_PUBLIC_SUPABASE_ANON_KEY` (Project Settings > API). Nunca pongas la service role key en variables `NEXT_PUBLIC_`.
4. En Authentication > URL Configuration añade `http://localhost:3000`.
5. `npm run dev` y abre http://localhost:3000
6. Para ser administrador: regístrate y ejecuta en SQL `update profiles set is_admin = true where username = 'TU_USUARIO';`

## Estado real
| Función | Estado |
|---|---|
| Registro, login, logout, recuperar contraseña | Hecho (Supabase Auth) |
| Buscador con autocompletado, portada de juegos | Hecho (portadas: pendiente) |
| Página de juego, eventos, favoritos | Hecho; eventos solo manuales |
| Esquema SQL + RLS: perfiles, amigos, chat, notificaciones, cuentas vinculadas, denuncias | Solo base de datos, **sin interfaz** |
| Perfil editable, amigos, chat, notificaciones, administración | Pendiente (interfaz) |
| Torneos, rankings, estadísticas, voz WebRTC, salas, Premium | Pendiente (tablas sin crear) |
| OAuth Steam, Epic, Roblox, Xbox, PSN | Pendiente (requiere credenciales de cada proveedor) |
