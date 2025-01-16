import { useAuthStore } from '../stores/authStore';

export default function Dashboard() {
  const { role } = useAuthStore();

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Panel de Control</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Add dashboard cards based on user role */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-2">Rol actual: {role}</h3>
          <p className="text-gray-600">Más funcionalidades próximamente...</p>
        </div>
      </div>
    </div>
  );
}
