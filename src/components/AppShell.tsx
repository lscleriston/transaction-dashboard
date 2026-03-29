import { NavLink, Outlet } from "react-router-dom";

export default function AppShell() {
  return (
    <div className="min-h-screen flex bg-background">
      {/* Sidebar */}
      <aside className="w-64 min-h-screen bg-[#0f1210] text-white border-r border-white/6 flex flex-col">
        <div className="h-16 flex items-center px-4 border-b border-white/6">
          <h1 className="text-lg font-semibold tracking-tight">💰 FinControl</h1>
        </div>
        <nav className="flex-1 px-3 py-4 space-y-2 overflow-auto">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                isActive ? "bg-white/6" : "text-white/80 hover:bg-white/3"
              }`
            }
          >
            Transações
          </NavLink>
          <NavLink
            to="/accounts"
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                isActive ? "bg-white/6" : "text-white/80 hover:bg-white/3"
              }`
            }
          >
            Contas
          </NavLink>
          <NavLink
            to="/import"
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                isActive ? "bg-white/6" : "text-white/80 hover:bg-white/3"
              }`
            }
          >
            Importar
          </NavLink>
          <NavLink
            to="/categories"
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                isActive ? "bg-white/6" : "text-white/80 hover:bg-white/3"
              }`
            }
          >
            Categorias
          </NavLink>
        </nav>

        <div className="px-3 py-4 border-t border-white/6">
          <div className="text-xs text-white/60">Contas</div>
          <div className="mt-2 text-sm">(lista de contas)</div>
        </div>
      </aside>

      <div className="flex-1 flex flex-col">
        <header className="sticky top-0 z-30 border-b bg-card/80 backdrop-blur-md">
          <div className="container flex h-14 items-center justify-between">
            <div />
            <nav className="flex gap-1">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                    isActive ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-secondary"
                  }`
                }
              >
                Transações
              </NavLink>
            </nav>
          </div>
        </header>

        <main className="container py-6 animate-fade-in flex-1 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
