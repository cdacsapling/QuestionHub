package exam.hello;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface AnswerRepo extends JpaRepository<AnswerEntity, Integer> {

	@Query("select u from AnswerEntity u where u.question_id= ?1")
	List<AnswerEntity> findAllAnswerForQstnId(int qstn_id);

	@Query("select u from AnswerEntity u where u.user_sr_id= ?1")
	Optional<AnswerEntity> findByserId(int user_sr_number);

}
