package exam.hello;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface QuestionRepo extends JpaRepository<QuestionEntity, Integer> {

	@Query("select u from QuestionEntity u where u.module_id= ?1")
	List<QuestionEntity> findByModuleId(int module_id);

}
