package exam.hello;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface ModuleRepo extends JpaRepository<ModuleEntity, Integer>  {

	
	

}
