package cmpe275.team.ninja.movieCenter.io.repositories;

import cmpe275.team.ninja.movieCenter.io.entity.UserEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<UserEntity, Long> {
    UserEntity findByUserId(String id);
}
