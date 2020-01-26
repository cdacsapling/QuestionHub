package exam.hello;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ProfileRepo extends JpaRepository<ProfileEntity, Integer> {

	@Query("select u from ProfileEntity u where u.user_login_id=?1")
	ProfileEntity getProfileForUser(int serial_nmber);

	

}
