import './App.css'; // استيراد ملفات CSS للتنسيق
import 'bootstrap/dist/css/bootstrap.min.css'; // استيراد ملفات CSS الخاصة بـ Bootstrap
import DarkThem from './component/DarkThem/DarkThem.jsx'
function App() {
  return (
    <div className="App">
      <DarkThem />
    </div>
  );
}

export default App; // تصدير المكون App للاستخدام في ملفات أخرى
