import { useGetAllSemesterQuery } from "../../../redux/features/academicSemester/academicSemester";

const AcademicSemester = () => {
  const { data, error} = useGetAllSemesterQuery(undefined);
  console.log(data);
  console.log(error);
  

  return <div>AcademicSemester</div>;
};

export default AcademicSemester;
