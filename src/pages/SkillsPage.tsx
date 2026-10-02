export default function SkillsPage() {
   type Skill = {
        id: number;
        name: string;
        level: string;
    };

     const skills: Skill[] = [
        { id: 1, name: 'C++', level: 'Pre-Intermediate' },
        { id: 2, name: 'Communication', level: 'Advanced' },
        { id: 3, name: "HTML", level: 'Pre-Intermediate' },
        { id: 4, name: "Power BI", level: "Intermediate" },
        { id: 5, name: 'Teamework', level: 'Advanced' },
    ];

  return (
     <main><h2>My Skills</h2>
        <nav><div className="links">
                {skills.length === 0 ? (
                    <p>Пока нет навыков</p>
                ) : (
                    <table>
                        <thead>
                            <tr>
                                <th>Skills</th>
                                <th>Level</th>
                            </tr>
                        </thead>
                        <tbody>
                            {skills.map((skill) => (
                                <tr key={skill.id}>
                                    <td>{skill.name}</td>
                                    <td>{skill.level}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
        </div></nav></main>
  );
}