package exam.hello;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface CredentialEntityRepo extends JpaRepository<CredentialEntity, Integer> {

	@Query("SELECT u FROM CredentialEntity u WHERE u.login_id = ?1")
	CredentialEntity getLoggedInUser(int id);
	
}
