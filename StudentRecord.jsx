import { useState } from 'react';

export default function StudentRecord() {
  const [form, setForm] = useState({ name: '', course: '', email: '' });
  const [records, setRecords] = useState([]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setRecords((previous) => [{ ...form, id: crypto.randomUUID() }, ...previous]);
    setForm({ name: '', course: '', email: '' });
  };

  return (
    <div style={{ display: 'grid', gap: 16 }}>
      <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 12, maxWidth: 480 }}>
        <h2 style={{ margin: 0 }}>Student Record</h2>
        <label style={{ display: 'grid', gap: 6 }}>
          <span>Name</span>
          <input name="name" value={form.name} onChange={handleChange} required />
        </label>
        <label style={{ display: 'grid', gap: 6 }}>
          <span>Course</span>
          <input name="course" value={form.course} onChange={handleChange} required />
        </label>
        <label style={{ display: 'grid', gap: 6 }}>
          <span>Email</span>
          <input name="email" type="email" value={form.email} onChange={handleChange} required />
        </label>
        <button type="submit">Save</button>
      </form>

      {records.length > 0 && (
        <div>
          <h3>Saved Records</h3>
          <ul style={{ paddingLeft: 16 }}>
            {records.map((r) => (
              <li key={r.id}>{r.name} — {r.course} — {r.email}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}


