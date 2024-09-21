package dev.fsantana.list_manager.domain.repository;

import dev.fsantana.list_manager.domain.model.TaskItem;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import java.util.Optional;

public interface TaskItemRepository extends JpaRepository<TaskItem, Long>, JpaSpecificationExecutor<TaskItem> {

    Page<TaskItem> findByTaskListIdOrderByIsPriorityDesc(Long taskListId, Pageable page);

    Optional<TaskItem> findByTitleIgnoreCase(String title);
}
