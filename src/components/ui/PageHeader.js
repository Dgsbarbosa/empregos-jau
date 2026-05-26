export default function PageHeader({ title, subtitle }) {
  return (
    <section className="mb-10">
      <h1 className="text-4xl font-black tracking-tight text-slate-900">
        {title}
      </h1>

      {subtitle && (
        <p className="mt-3 text-slate-600 text-lg">
          {subtitle}
        </p>
      )}
    </section>
  );
}